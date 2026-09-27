export const name="text-align-justify";
export const id="dl_6965a67137ce4b0192e4";
export const url=new URL("../icons/text-align-justify.svg?v=d37a0c41419602286528ef3083d4c17fc29af705fa728d03ef59bd5d2f56f2b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
