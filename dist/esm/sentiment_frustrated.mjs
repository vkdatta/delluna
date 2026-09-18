export const name="sentiment_frustrated";
export const id="dl_7b5a628a801e4c998312";
export const url=new URL("../icons/sentiment_frustrated.svg?v=ee1ec1740fbff4127c805305f856ec03b33db68c2c8cac2ca1138eae90080e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
