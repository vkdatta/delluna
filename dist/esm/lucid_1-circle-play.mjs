export const name="lucid_1-circle-play";
export const id="dl_c129d1df63ac41b99df1";
export const url=new URL("../icons/lucid_1-circle-play.svg?v=b31971eeea078aa155d3ebcec11380c6a25a388b08c61193a876e26bb86fbf8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
