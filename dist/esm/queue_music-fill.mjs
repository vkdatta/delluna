export const name="queue_music-fill";
export const id="dl_aff77f920952e375d8c9";
export const url=new URL("../icons/queue_music-fill.svg?v=b050207366b85e8ec1a7f6c5f662ad3f4d4bbea13b8a0065af5e59b6e56400fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
