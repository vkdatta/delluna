export const name="bookmark-simple-thin";
export const id="dl_34ac80aafc834ddba0f0";
export const url=new URL("../icons/bookmark-simple-thin.svg?v=6153d8fd0ddf96b5284c74fd40528ce77b50672a0ceef3283534e75017ab9d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
