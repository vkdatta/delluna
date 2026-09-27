export const name="robot_2";
export const id="dl_7d64c3ee46cbacaf9f67";
export const url=new URL("../icons/robot_2.svg?v=0c1020ac591b61c9c2c012daaf453685215186a73bd3e0a3e620bfc6c4e92769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
