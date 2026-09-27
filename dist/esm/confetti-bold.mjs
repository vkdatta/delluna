export const name="confetti-bold";
export const id="dl_d86e0c61304f4b3abb5b";
export const url=new URL("../icons/confetti-bold.svg?v=b844cf7dbb9a322849c7aea6afeec08bce92e052bd1cb8df9df1e019e44998bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
