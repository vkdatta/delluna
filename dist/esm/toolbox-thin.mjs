export const name="toolbox-thin";
export const id="dl_09ee311f103e459fb878";
export const url=new URL("../icons/T/toolbox-thin.svg?v=ef1656f0017d06d1315c6133462eadf4983030a6b62741722ed7aa564800e20f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
