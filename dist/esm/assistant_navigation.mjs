export const name="assistant_navigation";
export const id="dl_c866cbb5063a44709430";
export const url=new URL("../icons/A/assistant_navigation.svg?v=55c2ee47dbfe88e4212fd9f14eb66d5e79be6ed9496e0839af7ebee4394ea587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
