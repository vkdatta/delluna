export const name="lego-smiley-bold";
export const id="dl_73a4564c4c714024a1e9";
export const url=new URL("../icons/lego-smiley-bold.svg?v=89a1c9920d238eeaa1d6d287580b6906ecbf12a0e33384fd13b756ad7bfc171e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
