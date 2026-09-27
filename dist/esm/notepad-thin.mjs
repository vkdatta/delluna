export const name="notepad-thin";
export const id="dl_d316b53a3cee42b9a552";
export const url=new URL("../icons/notepad-thin.svg?v=8d52d3d0721fd02a06a6695ca11f839d5a478c61d07e71c24b04f959b3f8def4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
