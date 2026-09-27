export const name="replit-logo";
export const id="dl_e19d1c0afbfc4879b2a3";
export const url=new URL("../icons/replit-logo.svg?v=4b6b57cb03a9da47c60409e836fb196f18d459b40436ad36cc9f6f059035fbcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
