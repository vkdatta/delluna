export const name="reddit-logo";
export const id="dl_b3738f8ec6584a91b269";
export const url=new URL("../icons/reddit-logo.svg?v=de2c92592ef695ae14a06874e2bba10672c3218c4fa038bface44510eb3c22cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
