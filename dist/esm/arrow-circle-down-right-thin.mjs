export const name="arrow-circle-down-right-thin";
export const id="dl_d6166a3e88e94d84aee2";
export const url=new URL("../icons/arrow-circle-down-right-thin.svg?v=5fd8ac82adbc0212d73c8e62b680aa55645d009e09548fedda0b589fef99b25f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
