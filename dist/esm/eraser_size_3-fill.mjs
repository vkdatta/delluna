export const name="eraser_size_3-fill";
export const id="dl_ed7e913fda1b2b43b211";
export const url=new URL("../icons/eraser_size_3-fill.svg?v=a439bf200593bc263c08e1559b4cf19b8cfc150aa132d7654dcdecea67dc5de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
