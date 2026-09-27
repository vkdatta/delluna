export const name="polygon";
export const id="dl_b78699541f7e4ddd96f1";
export const url=new URL("../icons/polygon.svg?v=9081c7491b6efe73e1b8731b52a9c2447c9046679b961a9f84720bd3b792bb1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
