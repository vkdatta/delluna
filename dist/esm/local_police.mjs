export const name="local_police";
export const id="dl_18a274a945f15e931046";
export const url=new URL("../icons/local_police.svg?v=4fab62aa75a6d462be4e6cc8afe84743c55167aee0930c70778e8f03c8bf708e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
