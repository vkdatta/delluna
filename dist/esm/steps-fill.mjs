export const name="steps-fill";
export const id="dl_f4cd07f6288c8c97504f";
export const url=new URL("../icons/steps-fill.svg?v=59fa8e55eeaa54c0dad9782d6c35173345f9db5936f8ef386fd18629a7f38169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
