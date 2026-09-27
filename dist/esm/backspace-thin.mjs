export const name="backspace-thin";
export const id="dl_913d5af5aa864111850a";
export const url=new URL("../icons/backspace-thin.svg?v=d7e6a7d42333e9653b94f12b262786baa00b1ca35b1de71fe90f5453044d153d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
