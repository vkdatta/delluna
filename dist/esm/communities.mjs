export const name="communities";
export const id="dl_99a86355b46d09cf9fe6";
export const url=new URL("../icons/communities.svg?v=fd95983192d352a164c71fb99239613dc85d90c2eb72541eb7a5f9a685a0d69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
