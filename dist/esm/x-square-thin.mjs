export const name="x-square-thin";
export const id="dl_2f3a8e71bd7ba8b528d3";
export const url=new URL("../icons/x-square-thin.svg?v=ab896f94457257ead623eebd82b83a1b7298541fa5cb9d0a73de87f0d76c00b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
