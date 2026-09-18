export const name="where_to_vote";
export const id="dl_68eee520a8bb4e00905c";
export const url=new URL("../icons/where_to_vote.svg?v=98bd052cb6e0a89a536302d8b154c891984eb618503983b5b7f9f1e2d9b1ad2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
