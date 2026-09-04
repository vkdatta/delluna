export const name="download-simple-fill";
export const id="dl_3c33996f196c4540b78f";
export const url=new URL("../../icons/D/download-simple-fill.svg?v=dee151da85ad71e90a882a556481e2069a154b8892063c9f91b621a0e06ad479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
