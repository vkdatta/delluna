export const name="breaking_news";
export const id="dl_533f45da7cba36afa059";
export const url=new URL("../icons/breaking_news.svg?v=a4838d910456c0c21c0cea215de155a692eae6918f061fc8f8393e257295787d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
