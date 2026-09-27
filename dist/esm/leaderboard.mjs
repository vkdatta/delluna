export const name="leaderboard";
export const id="dl_f8ca2fcc9dbf0366729f";
export const url=new URL("../icons/leaderboard.svg?v=343c835992b86418fb7039bcaaa7bbd4aecccf1f9b3888a23454a2cb69d8fa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
