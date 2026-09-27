export const name="interactive_space";
export const id="dl_998498db8c56b7d2c242";
export const url=new URL("../icons/interactive_space.svg?v=ee52080f6f03d4efc7fb31efb0c4d09d7d15233623f416781b98ddbaa92551b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
