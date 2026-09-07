export const name="mouse-right-click-bold";
export const id="dl_ec29e2578cce4eae8041";
export const url=new URL("../icons/mouse-right-click-bold.svg?v=6ac708e90131db6c441e0a9380086a1ecda8e94f5aa836318469f0588fdd4446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
