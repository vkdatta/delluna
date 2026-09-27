export const name="image-square";
export const id="dl_9cc8be7288b44903beb4";
export const url=new URL("../icons/image-square.svg?v=8d396bee91d90e01f9b98de45c41f08e5b35b96d3ab6e3b6f1b0e74fd991232a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
