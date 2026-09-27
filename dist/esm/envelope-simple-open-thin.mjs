export const name="envelope-simple-open-thin";
export const id="dl_0b4b317db7e74240a85f";
export const url=new URL("../icons/envelope-simple-open-thin.svg?v=676a40036cefa67e91e7decebdef46ba452ef5415f45a2f33605e68a6d09799f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
