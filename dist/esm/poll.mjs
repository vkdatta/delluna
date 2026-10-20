export const name="poll";
export const id="dl_519111e2bacd4df1aca0";
export const url=new URL("../icons/icons-svg/poll.svg?v=e17d0d15cdaf4e07f54eb7a9d81aba69632db66469e9800d9f122539baf0c18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
