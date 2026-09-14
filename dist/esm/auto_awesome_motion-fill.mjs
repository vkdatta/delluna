export const name="auto_awesome_motion-fill";
export const id="dl_e7cc757358b147cfb74c";
export const url=new URL("../icons/A/auto_awesome_motion-fill.svg?v=4a10119f0e8a2d87e8e86c36a21d19913acbbc7a95b0941be014c2812dd1bca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
