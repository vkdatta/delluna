export const name="lucid_2-lock";
export const id="dl_a65d9ca60b2f4542a958";
export const url=new URL("../icons/lucid_2-lock.svg?v=a974f159e2b906216b31a399f641756694f5825f325592c8ed611eac4fc8dd63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
