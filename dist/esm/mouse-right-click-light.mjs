export const name="mouse-right-click-light";
export const id="dl_68ee0c3bbf9a49afb03b";
export const url=new URL("../icons/mouse-right-click-light.svg?v=afe4d8b10127a325001384ae2a5a09d0dab6675cfe1ca8e29abf988b69fd3956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
