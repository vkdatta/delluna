export const name="sentiment_very_dissatisfied";
export const id="dl_96c0d5727d9849a3bc4d";
export const url=new URL("../icons/sentiment_very_dissatisfied.svg?v=314801a5e722750a081497c1d4c58aae3cc150ede5130576d74d2e3c5a8d7b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
