export const name="square-half-bottom-thin";
export const id="dl_a2bcbb087cd76582a8a8";
export const url=new URL("../icons/square-half-bottom-thin.svg?v=a5c28cd262ecf07de1ae6457777dc2957c0f87718aed883aceadd103c1b9e7aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
