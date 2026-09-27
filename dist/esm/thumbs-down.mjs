export const name="thumbs-down";
export const id="dl_3da75e7629fc4d62bd1c";
export const url=new URL("../icons/thumbs-down.svg?v=ba4e8e099e76b009baebeb8dbc77ea4f6a05d667b31855e7905b67e956fe5eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
