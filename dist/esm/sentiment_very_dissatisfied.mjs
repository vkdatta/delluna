export const name="sentiment_very_dissatisfied";
export const id="dl_c630d4e80b74db4290df";
export const url=new URL("../icons/sentiment_very_dissatisfied.svg?v=be0acec47160f98f0030c11ead5a40767ac0643be6b1a27c239b91d6ac8993d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
