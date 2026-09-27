export const name="lucid_2-dumbbell";
export const id="dl_1c8726f7059b43a5bc6b";
export const url=new URL("../icons/lucid_2-dumbbell.svg?v=8f5b95c07a0b7b1cc65e8ca97c52d56e3995f6362305ac516e94996f9ef308bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
