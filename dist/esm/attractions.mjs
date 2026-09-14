export const name="attractions";
export const id="dl_94bebf9f9992443d8157";
export const url=new URL("../icons/A/attractions.svg?v=75d194de2a4d7af92ecdece6433439ee7d90958f4c017c8b8ef140a7bcb4004f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
