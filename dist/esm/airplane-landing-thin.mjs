export const name="airplane-landing-thin";
export const id="dl_6761693623a7406ca286";
export const url=new URL("../icons/airplane-landing-thin.svg?v=a0847d4dfe43aee9af10a68805c74e3bfae23e55f8d58c425c397ec6c76d91ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
