export const name="play_circle-fill";
export const id="dl_ab3f6dc2db610b03b905";
export const url=new URL("../icons/play_circle-fill.svg?v=c2b5cc5780daf1c2685bf27b7c572205c1573690c12b247b969d27c6fc9f0a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
