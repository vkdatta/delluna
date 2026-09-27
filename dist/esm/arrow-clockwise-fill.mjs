export const name="arrow-clockwise-fill";
export const id="dl_b98cbba4266f41d7b26b";
export const url=new URL("../icons/arrow-clockwise-fill.svg?v=45f3b85c0e2c2b07bf57fe186bb6148b0f93e29f800f3b01e71830325c1e6b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
