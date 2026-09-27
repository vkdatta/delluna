export const name="arrow-circle-up-thin";
export const id="dl_5c162d3ab97c4f62a821";
export const url=new URL("../icons/arrow-circle-up-thin.svg?v=70e6485b57aa97479b4f6ad133d37240ce9cb6e7036ba9a4f15385589ca3a5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
