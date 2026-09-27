export const name="mouse-middle-click-duotone";
export const id="dl_9bacb1877187429b9189";
export const url=new URL("../icons/mouse-middle-click-duotone.svg?v=b84f65ac66716ef93f2fc28684dc2594a53dd41fe78b9486bdbc227c1b4bbb41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
