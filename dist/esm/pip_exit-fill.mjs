export const name="pip_exit-fill";
export const id="dl_7531af3b91df64ecb3c5";
export const url=new URL("../icons/pip_exit-fill.svg?v=7ba91aae3528313a90bb54ede795bad22e2826b05e080d71ca88280ad59ea39f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
