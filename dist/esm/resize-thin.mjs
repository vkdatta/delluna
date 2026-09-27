export const name="resize-thin";
export const id="dl_57d1130531274d439b25";
export const url=new URL("../icons/resize-thin.svg?v=a6b8118dde7e45a464964ecd7d168ffee0eca90f8a307e0ca7b6dcad4457663a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
