export const name="sports_football";
export const id="dl_ad9931a9e8a1112f7498";
export const url=new URL("../icons/sports_football.svg?v=a96e8dcdaaccf98558aaf59550cca887a5595b05e09b48b1f8e8071f982c7527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
