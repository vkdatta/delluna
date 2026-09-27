export const name="flag-pennant-thin";
export const id="dl_3f5e68c7bccd4139bc8f";
export const url=new URL("../icons/flag-pennant-thin.svg?v=35f5fee06fd0a1bcc539cd34563b3e1939cbb1f568a539ce33afb420b4591929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
