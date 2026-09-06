export const name="caret-circle-double-left-thin";
export const id="dl_530a3f6ee58645219b6c";
export const url=new URL("../icons/caret-circle-double-left-thin.svg?v=dfeb3d220e816771fcae583605646d14e5ed7af0bf7c00363e6b1ebb71edbca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
