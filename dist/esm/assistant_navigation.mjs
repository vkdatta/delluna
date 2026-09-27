export const name="assistant_navigation";
export const id="dl_f8054cab2d72cc2f025a";
export const url=new URL("../icons/assistant_navigation.svg?v=55c2ee47dbfe88e4212fd9f14eb66d5e79be6ed9496e0839af7ebee4394ea587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
