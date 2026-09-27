export const name="patreon-logo-fill";
export const id="dl_51862c4c738c4c9897fd";
export const url=new URL("../icons/patreon-logo-fill.svg?v=db8d9fdbecef9dc88c6db2edb4bf71c80aa99b1c0228ce0100b5064f3e9b3c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
