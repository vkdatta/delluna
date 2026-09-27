export const name="scribble-loop";
export const id="dl_ba298fb988ece16017a4";
export const url=new URL("../icons/scribble-loop.svg?v=968551b4380d9de3e5f45cb0134c9f8052d6aab7cd6e0f617d66b00c4b0c3b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
