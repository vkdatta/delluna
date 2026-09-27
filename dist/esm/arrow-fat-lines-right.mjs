export const name="arrow-fat-lines-right";
export const id="dl_46e83a16b45d4746842c";
export const url=new URL("../icons/arrow-fat-lines-right.svg?v=ff2cb4a0772cfc88ebbf8f2044841a684800945fe8dd41c106503d5ac8caa2d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
