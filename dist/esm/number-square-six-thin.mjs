export const name="number-square-six-thin";
export const id="dl_6e141e388ee34bce9151";
export const url=new URL("../icons/number-square-six-thin.svg?v=9f9661271593ec038479bec6672de360c7ed2529dc8e72f1ae21a28b74bb4ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
