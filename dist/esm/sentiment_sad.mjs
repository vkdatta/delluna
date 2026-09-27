export const name="sentiment_sad";
export const id="dl_8bfa3e41ec47500b867c";
export const url=new URL("../icons/sentiment_sad.svg?v=6a205a80fc3692c416c1201607bee97502aa0a812805eb1082a7a82131e21b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
