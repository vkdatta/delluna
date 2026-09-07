export const name="image-square";
export const id="dl_9cc8be7288b44903beb4";
export const url=new URL("../icons/image-square.svg?v=73f5b6aa22a49ad093908151e8f606dd7c797a192cfb96b00c6519d45dffe936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
