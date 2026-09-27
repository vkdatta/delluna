export const name="loyalty-fill";
export const id="dl_36bee8d45a90540e3123";
export const url=new URL("../icons/loyalty-fill.svg?v=ca0387d0c5d28a8f9ff852d41a6853702ee73eec7a0d0d39b559ff0a292ef3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
