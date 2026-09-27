export const name="drop-slash-thin";
export const id="dl_3b0ac7f1ec7e4ee6b459";
export const url=new URL("../icons/drop-slash-thin.svg?v=7afefd547671763dce870e89d5b76ac4da978a164d8d0c70492cd67a7032e94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
